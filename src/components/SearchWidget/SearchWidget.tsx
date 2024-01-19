"use client";
import "./searchwidget.scss";

type Props = {};

export default function SearchWidget({}: Props) {
  return (
    <form className="search-widget">
      <div className="search-widget__input-box-from">
        <input type="text" placeholder="From" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <path
            d="M6 8.755h9.467l-2.4 2.327.933.905 4-3.878-4-3.88-.933.906 2.4 2.327H6zM18 15.245H8.533l2.4-2.327-.933-.905-4 3.878 4 3.88.933-.906-2.4-2.327H18z"
            fill="inherit"
          ></path>
        </svg>
      </div>
      <input type="text" placeholder="Where" />
      <div className="search-widget__input-box-there">
        <input
          type="text"
          placeholder="There"
          className="black-border-on-focus"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M220.001-450.001v-59.998h519.998v59.998H220.001Z" />
        </svg>
      </div>
      <div className="search-widget__input-box-back">
        <input
          type="text"
          placeholder="Back"
          className="black-border-on-focus"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <path
            d="M11 11h2v2h-2zM11 14h2v2h-2zM8 11h2v2H8zM8 14h2v2H8zM14 8h2v2h-2zM11 8h2v2h-2zM14
                                11h2v2h-2z"
            fill="inherit"
          ></path>
        </svg>
      </div>
      <button>Search</button>
    </form>
  );
}
