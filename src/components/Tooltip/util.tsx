export const placementHandler = (placement: String) => ({
  current: placement,
  negate() {
    if (this.current === 'left') return 'right';
    if (this.current === 'right') return 'left';
    if (this.current === 'top') return 'bottom';
    if (this.current === 'bottom') return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  }
});

export const pointHandler = () => ({
  x: null,
  y: null,
  reset(point: { x: number; y: number }) {
    this.x = point.x;
    this.y = point.y;
  },
  restrictRect(boundaries: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }) {
    if (this.x < boundaries.left) this.x = boundaries.left;
    else if (this.x > boundaries.right) this.x = boundaries.right;
    if (this.y < boundaries.top) this.y = boundaries.top;
    else if (this.y > boundaries.bottom) this.y = boundaries.bottom;
  }
});

export const getPoint = (
  element: HTMLLIElement,
  tooltip: HTMLLIElement,
  placement: String,
  space?: number
) => {
  let recurCount = 0;
  const point = pointHandler();
  const boundaries = {
    left: space,
    top: space,
    right: document.body.clientWidth - (tooltip.clientWidth + space),
    bottom: window.innerHeight - (tooltip.clientHeight + space)
  };
  const elementRect = element.getBoundingClientRect();

  return (function recursive(placement) {
    recurCount++;
    const position = placementHandler(placement);
    let updatedPlacement = position.current;
    switch (position.current) {
      case 'left':
        point.x = elementRect.left - (tooltip.offsetWidth + space);
        point.y =
          elementRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'right':
        point.x = elementRect.right + space;
        point.y =
          elementRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'top':
        point.x =
          elementRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        point.y = elementRect.top - (tooltip.offsetHeight + space);

        break;
      default:
        point.x =
          elementRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        point.y = elementRect.bottom + space;
    }

    if (recurCount < 3)
      if (
        (position.isHorizontal() &&
          (point.x < boundaries.left || point.x > boundaries.right)) ||
        (position.isVertical() &&
          (point.y < boundaries.top || point.y > boundaries.bottom))
      ) {
        point.reset(recursive(position.negate()));
        updatedPlacement = position.negate();
      }

    point.restrictRect(boundaries);

    return { ...point, updatedPlacement: updatedPlacement.toLowerCase() };
  })(placement);
};
