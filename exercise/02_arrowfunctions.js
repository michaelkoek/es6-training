/**
 * ARROW FUNCTIONS - TEST
 * Theme: Michael Jackson
 *
 * 1: Convert the Function Declaration into a Arrow Function
 *    - Pass the Album 'Thriller' as an argument to the function
 *    - Set a default value: 'no album'
 *    - No Console log in the function body
 *
 * 2: Display the amount of albums
 *    - Don't use console.log inside the body function
 *    - Construct this sentence: `MJ has X albums`
 *    - Use Explicit return
 *    - Write in shortest possible syntax
 *
 *  3: New array with title and duration only
 *     - Extract the function into it's own expression
 *     - { title, durarion }
 *     - No console.log in the function body
 *
 *  4: Get all songs which has a featured artist
 *     - No Console log in the function body
 *     - Extract the function into a separate expressions
 *
 *  5: Get the total time of the album
 *     - No Console log in the function body
 *     - Extract the function into a separate expressions
 *     - May use Google to look up how to handle time
 *
 *     tip: Use and chain multiple build-in methods
 */

// Albums
const albums = [
  "Got to Be There",
  "Ben",
  "Music & Me",
  "Live!",
  "Forever, Michael",
  "Off the Wall",
  "Thriller",
  "Bad",
  "Dangerous",
  "Invincible",
  "Michael",
  "Xscape"
];

// Thriller Album
const data = [
  {
    "index": 0,
    "duration": "6:03",
    "title": "Wanna Be Startin' Somethin'",
    "feateredArtist": null,
    "bonus": false,
    "album": "Thriller"
  },
  {
    "index": 1,
    "duration": "4:21",
    "title": "Babe Be mine",
    "feateredArtist": null,
    "bonus": false
  },
  {
    "index": 2,
    "duration": "3:42",
    "title": "The Girl is Mine",
    "feateredArtist": "Paul McCartney",
    "bonus": false,
    "album": "Thriller"
  },
  {
    "index": 3,
    "duration": "5:58",
    "title": "Thriller",
    "feateredArtist": null,
    "bonus": false
  },
  {
    "index": 4,
    "duration": "4:18",
    "title": "Beat it",
    "feateredArtist": null,
    "bonus": false
  },
  {
    "index": 5,
    "duration": "4:54",
    "title": "Billie Jean",
    "feateredArtist": null,
    "bonus": false,
    "album": "Thriller"
  },
  {
    "index": 6,
    "duration": "4:06",
    "title": "Human Nature",
    "feateredArtist": null,
    "bonus": false,
    "album": "Thriller"
  },
  {
    "index": 7,
    "duration": "3:59",
    "title": "P.Y.T. (Pretty Young Thing)",
    "feateredArtist": null,
    "bonus": false,
    "album": "Thriller"
  },
  {
    "index": 8,
    "duration": "5:00",
    "title": "The Lady of My Life",
    "feateredArtist": null,
    "bonus": false
  },
  {
    "index": 9,
    "duration": "2:20",
    "title": "P.Y.T. (Pretty Young Thing) Demo version",
    "feateredArtist": null,
    "bonus": true,
    "album": "Thriller"
  }
];

// 1 // Correct this function
function getAlbum() {
  'Thriller';
}

console.log(getAlbum());
