export class AnwserEntity {

  constructor (
    private _index: number,
    private _label: string
  ) {}

  public getLabel (): string {
    return this._label
  }

  public getIndex (): number {
    return this._index
  }
}
