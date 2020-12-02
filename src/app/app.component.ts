import { Component, Optional } from "@angular/core";
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isDarkTheme = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  lastDialogResult: string;
  mode: string;
  value: number;

  foods: any[] = [
    { name: "Pizza", rating: "Excellent" },
    { name: "Burritos", rating: "Great" },
    { name: "French fries", rating: "Pretty good" }
  ];

  public selectedValue: string;

  public games = [
    { value: "rts-0", viewValue: "Starcraft" },
    { value: "rpg-1", viewValue: "Baldur's Gate" },
    { value: "fps-2", viewValue: "Doom" }
  ];

  public progress = 0;
  public slider = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 100,
    min: 0,
    showTicks: false,
    step: 1,
    thumbLabel: false,
    value: 0,
    vertical: false,
    tickInterval: 1,
    checked: true
  };
  public tiles = [
    { text: "One", cols: 3, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" }
  ];

  public color: string;

  public availableColors = [
    { name: "none", color: "" },
    { name: "Primary", color: "primary" },
    { name: "Accent", color: "accent" },
    { name: "Warn", color: "warn" }
  ];

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  openDialog() {
    const dialogRef = this._dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    });
  }

  showSnackbar() {
    this._snackbar.open("YUM SNACKS", "CHEW");
  }
  get tickInterval(): number | "auto" {
    return this.slider.showTicks
      ? this.slider.autoTicks
        ? "auto"
        : this.slider.tickInterval
      : null;
  }
  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }
}

@Component({
  template: `
    <h1 matDialogTitle>This is a dialog</h1>
    <div matDialogContent>
      <mat-form-field>
        <label>
          This is a text box inside of a dialog.
          <input matInput #dialogInput />
        </label>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button mat-raised-button [matDialogClose]="dialogInput.value">
        CLOSE
      </button>
    </div>
  `
})
export class DialogContentComponent {
  constructor(
    @Optional() public dialogRef: MatDialogRef<DialogContentComponent>
  ) {}
}
