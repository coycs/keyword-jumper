/**
 * from https://gist.github.com/KristofferEriksson/8acb9b3eb241507eb0f6232938bf4ec7
 */
import { useEffect, useState } from 'react'

interface UseTextSelectionReturn {
  text: string
  rects: DOMRect[]
  ranges: Range[]
  selection: Selection | null
}

function getRangesFromSelection(selection: Selection): Range[] {
  const rangeCount = selection.rangeCount
  return Array.from({ length: rangeCount }, (_, i) => selection.getRangeAt(i))
}

function isSelectionInsideRef(selection: Selection, ref: React.RefObject<HTMLElement>) {
  if (!ref.current || selection.rangeCount === 0)
    return true

  const range = selection.getRangeAt(0)
  return ref.current.contains(range.commonAncestorContainer)
}

export function useTextSelection(
  elementRef?: React.RefObject<HTMLElement>,
): UseTextSelectionReturn {
  const [selection, setSelection] = useState<Selection | null>(null)
  const [text, setText] = useState('')
  const [ranges, setRanges] = useState<Range[]>([])
  const [rects, setRects] = useState<DOMRect[]>([])

  useEffect(() => {
    const onSelectionChange = () => {
      const newSelection = window.getSelection()

      if (
        newSelection
        && (!elementRef || isSelectionInsideRef(newSelection, elementRef))
      ) {
        setSelection(newSelection)
        setText(newSelection.toString())
        const newRanges = getRangesFromSelection(newSelection)
        setRanges(newRanges)
        setRects(newRanges.map(range => range.getBoundingClientRect()))
      }
      else {
        setText('')
        setRanges([])
        setRects([])
        setSelection(null)
      }
    }

    document.addEventListener('selectionchange', onSelectionChange)

    return () => {
      document.removeEventListener('selectionchange', onSelectionChange)
    }
  }, [elementRef])

  return {
    text,
    rects,
    ranges,
    selection,
  }
}
