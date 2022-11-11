export const DynamicIslandSizePresets = {
  default: {
    width: 150,
    aspectRatio: 44 / 150,
    borderRadius: 22,
  },
  compactLeading: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22,
  },
  compactTrailing: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22,
  },
  compactBothSides: {
    width: 235,
    aspectRatio: 44 / 235,
    borderRadius: 22,
  },
  // not sure about long width
  long: {
    width: 350,
    aspectRatio: 44 / 350,
    borderRadius: 22,
  },
  large: {
    width: 371,
    aspectRatio: 84 / 371,
    borderRadius: 42,
  },
  ultra: {
    width: 371,
    // the doc says 160, but it seems awkward.
    aspectRatio: 210 / 371,
    borderRadius: 42,
  },
}
