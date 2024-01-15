export default class view {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) return;

    this._data = data;
    this._years.textContent = this._data.years;
    this._months.textContent = this._data.mounths;
    this._days.textContent = this._data.days;
  }
}
