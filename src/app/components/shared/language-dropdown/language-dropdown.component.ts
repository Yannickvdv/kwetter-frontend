import { Component, forwardRef, Input, } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Language } from "src/app/models/enums/language.enum";

@Component({
  selector: "app-language-dropdown",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguageDropdownComponent),
      multi: true
    }
  ],
  templateUrl: "./language-dropdown.component.html",
  styleUrls: ["./language-dropdown.component.scss"]
})
export class LanguageDropdownComponent implements ControlValueAccessor {

  @Input()
  name: string;
  @Input("selectedLanguage")
  _selectedLanguage: string;

  languages = Language;
  keys = null;

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor() {
    this.keys = Object.keys(Language).filter(k => !isNaN(Number(k)));
  }

  get selectedLanguage() {
    return this._selectedLanguage;
  }

  set selectedLanguage(selectedIndex) {
    const language = this.languages[selectedIndex];
    this._selectedLanguage = language;
    this.onChange(language);
    this.onTouched();
  }

  writeValue(language: string): void {
    if (language) {
      this.selectedLanguage = language;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
