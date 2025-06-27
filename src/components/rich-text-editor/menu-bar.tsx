import React from "react"
import { Heading1, Heading2, Heading3, Bold, Italic, Strikethrough, Highlighter, AlignLeft, AlignCenter, AlignRight, AlignJustify, ListOrdered, List } from "lucide-react"
import { Toggle } from "@radix-ui/react-toggle"
import { Editor } from '@tiptap/react'

export default function MenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  const options = [
    {
      name: 'heading1',
      icon: <Heading1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    {
      name: 'heading2',
      icon: <Heading2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
    {
      name: 'heading3',
      icon: <Heading3 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run()
    },
    {
      name: 'bold',
      icon: <Bold />,
      onClick: () => editor.chain().focus().toggleBold().run()
    },
    {
      name: 'italic',
      icon: <Italic />,
      onClick: () => editor.chain().focus().toggleItalic().run()
    },
    {
      name: 'strike',
      icon: <Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run()

    },
    {
      name: 'highlight',
      icon: <Highlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run()
    },
    {
      name: 'bulletList',
      icon: <List />,
      onClick: () => editor.chain().focus().toggleBulletList().run()
    },
    {
      name: 'orderedList',
      icon: <ListOrdered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run()
    },
    {
      name: 'alignLeft',
      icon: <AlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign('left').run()
    },
    {
      name: 'alignCenter',
      icon: <AlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign('center').run()
    },
    {
      name: 'alignRight',
      icon: <AlignRight />,
      onClick: () => editor.chain().focus().setTextAlign('right').run()
    },
    {
      name: 'alignJustify',
      icon: <AlignJustify />,
      onClick: () => editor.chain().focus().setTextAlign('justify').run()
    }
  ]

  return (
    <div className="px-2 mb-1 space-x-4 z-50 text-white">
      {options.map((option, index) => (
        <Toggle key={index} onClick={option.onClick}>
          {option.icon}
        </Toggle>
      ))}
    </div>
  )
}