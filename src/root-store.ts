import { Model, model } from "mobx-keystone";
import { NoteModel } from "./note-model";

@model("root")
export class RootStore extends Model({}) {
  findById(noteId: string): string | undefined {
    return new NoteModel(noteId).value;
  }
}
