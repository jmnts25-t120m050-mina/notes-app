export interface NewNote {
  title: string,
  body: string
}

export interface Note extends NewNote {
  created: number | null
}

export interface NumberedNote extends Note {
  id: number | null
}
