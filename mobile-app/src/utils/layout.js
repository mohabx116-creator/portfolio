export function getTextAlign(isRTL) {
  return isRTL ? 'right' : 'left';
}

export function getRowDirection(isRTL, reverse = false) {
  if (reverse) {
    return isRTL ? 'row' : 'row-reverse';
  }

  return isRTL ? 'row-reverse' : 'row';
}
