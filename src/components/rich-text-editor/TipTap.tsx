'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import MenuBar from './menu-bar'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({
          bulletList: {
            HTMLAttributes: {
              class: 'list-disc ml-3',
            },
          },
          orderedList: {
            HTMLAttributes: {
              class: 'list-decimal ml-3',
            },
          },
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],

    }),
        Highlight,
        Placeholder.configure({
          placeholder: 'Type something...',
          emptyEditorClass: 'is-editor-empty',
    }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'min-h-[200px] text-white py-2 px-3 focus:outline-none',
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
        console.log(editor.getHTML())
    //  const json = editor.getJSON()
    }
})
  return (
    <div className="max-w-[60%] mx-auto p-8">
        <MenuBar editor={editor}/>
        <EditorContent editor={editor} />
    </div>
  )
}
export default Tiptap
