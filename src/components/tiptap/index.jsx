'use client'

import { forwardRef } from 'react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import HardBreak from '@tiptap/extension-hard-break'
import FontFamily from '@tiptap/extension-font-family'
import Highlight from '@tiptap/extension-highlight'
import { FontSize } from './fontSizeExtension'
import { useEditor, EditorContent } from '@tiptap/react'
import { ToolBar, LoadingSpinner } from '..'

const Tiptap = forwardRef(({ onChange, card }, ref) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      HardBreak,
      FontFamily,
      FontSize,
      TextAlign.configure({
        types: ['paragraph']
      }),
      Highlight.configure({ multicolor: true })
    ],
    editorProps: {
      attributes: {
        class: 'flex-grow'
      },
      handleKeyDown(_, event) {
        if (event.key === 'Enter') {
          event.preventDefault() // Prevent default behavior
          editor
            .chain()
            .focus()
            .setHardBreak() // Insert hard break
            .run()
          return true // Indicate the event has been handled
        }
        return false // Allow other key events to propagate
      }
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  return (
    <section className="text-black font-semibold flex flex-col gap-2 w-full flex-grow relative">
      <ToolBar editor={editor} />

      <div
        ref={ref}
        className={`p-1.5 flex-grow flex relative z-50 min-h-[calc(100vh-10rem)] md:min-h-[unset]`}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${card?.img || ''})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundOrigin: 'border-box'
        }}
      >
        <EditorContent
          style={{ whiteSpace: 'pre-line' }}
          editor={editor}
          className="flex-grow flex outline-0 px-1 py-1"
        />
      </div>
      <LoadingSpinner className="absolute top-1/2 left-1/2 w-10 h-10 z-0 border-4 text-white" />
    </section>
  )
})

export default Tiptap
