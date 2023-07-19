import { computed, makeObservable } from "mobx";

export class NoteModel {
  constructor(private id: string) {
    makeObservable(this);
  }

  @computed
  get value(): string {
    return `value-${this.id}`;
  }
}
