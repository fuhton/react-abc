# Default Props

* [Engraver Params](#engraver-params)
* [Inline Control Params](#inline-control-params)
* [Midi Params](#midi-params)
* [Parser Params](#parser-params)
* [Render Params](#render-params)

### Engraver Params
| Param           | Default   | Description |
| ---             | ---       | ---         |
| `add_classes `  | false     | If true, then each element that is drawn on the SVG will have an identifying class with it that you can use to style, move, or hide the element. |
| `editable `     | false     | If true, then when a note is clicked, it is highlighted and a callback allows the editor to move the cursor. |
| `listener `     | null      | This is an object containing up to two functions. The format is: { highlight: function(abcElem) {}, modelChanged: function(abcElem) {} } The highlight function is called whenever the user clicks on a note or selects a series of notes. The modelChanged function is called whenever the user has changed the music visually. |
| `paddingbottom `| 30        | The spacing that the music should have on the web page. |
| `paddingleft `  | 15        | The spacing that the music should have on the web page. |
| `paddingright ` | 50        | The spacing that the music should have on the web page. |
| `paddingtop `   | 15        | The spacing that the music should have on the web page. |
| `responsive `   | undefined | |
| `scale `        | 1         | If the number passed is between zero and one, then the music is printed smaller, if above one, then it is printed bigger. |
| `staffwidth `   | 740       | The width of the music, in pixels. |

### Parser Params
| Param             | Default | Description |
| ---               | ---     | ---         |
| `header_only`     | false   | Only parse the header |
| `hint_measures`   | false   | Repeat the next measure at the end of the previous line, with a unique css class. |
| `print` .         | false   | Pay attention to margins and other formatting commands that don't make sense in a web page |
| `stop_on_warning` | false   | Only parse until the first warning is encountered |

### Render Params
| Param                | Default | Description |
| ---                  | ---     | ---         |
| `oneSvgPerLine`      | false   | Should each system of staves be rendered to a different SVG? This makes controlling with CSS easier, and makes it possible to paginate cleanly. |
| `scrollHorizontal`   | false   | Should there be a horizontal scrollbar if the music is wider than the viewport? (requires viewportHorizontal to be true.) |
| `startingTune`       | 0       | The index of the tune in the tunebook to render (starting at zero for the first tune). |
| `viewportHorizontal` | false   | Should the horizontal width be limited by the device's width? |

### Midi Params
| Param              | Default                         | Description |
| ---                | ---                             | ---         |
| `animate`          | null                            | Whether to do a "bouncing ball" effect on the visual music. { listener: callback, target: output of ABCJS.renderAbc, qpm: tempo } This calls the listener whenever the current note has changed. It is called with both the last selected note and the newly selected note. The callback parameters are arrays of svg elements. |
| `context`          | null                            | A string that is passed back to both the listener and animate callbacks. |
| `drum`             | ""                              | A string formatted like the %%MIDI drum specification. Using this parameter also implies %%MIDI drumon |
| `drumBars`         | 1                               | How many bars to spread the drum pattern over. |
| `drumIntro`        | 0                               | How many bars of drum should precede the music. |
| `downloadLabel`    | "download midi"                 | The text for the MIDI download. If it contains %T then that is replaced with the first title. If this is a function, then the result of that function is called. The function takes two parameters: the parsed tune and the zero-based index of the tune in the tunebook. |
| `generateDownload` | false                           | Whether to generate a download MIDI link. |
| `generateInline`   | true                            | Whether to generate the inline MIDI controls. |
| `inlineControls`   | [Link](#inline-control-params)  | These are the options for which buttons and functionality appear in the inline controls. This is a hash, and is defined below. |
| `listener`         | null                            | Function that is called for each midi event. The parameters are the current abcjs element and the current MIDI event. |
| `postTextDownload` | ""                              | Text that appears right after the download link (can contain HTML markup). |
| `postTextInline`   | ""                              | Text that appears right after the MIDI controls (can contain HTML markup). If it contains %T then that is replaced with the first title. |
| `preTextDownload`  | ""                              | Text that appears right before the download link (can contain HTML markup). |
| `preTextInline`    | ""                              | Text that appears right before the MIDI controls (can contain HTML markup). If it contains %T then that is replaced with the first title. |
| `program`          | 0                               | The midi program (aka "instrument") to use, if not specified in abcString. |
| `qpm`              | 180                             | The tempo, if not specified in abcString. |
| `transpose`        | 0                               | The number of half-steps to transpose the everything, if not specified in abcString. |


### Inline Control Params
| Param              | Default                                  | Description |
| ---                | ---                                      | ---         |
| `hide`             | false                                    | Whether to show the control at all. |
| `loopToggle`       | false                                    | Show a a latched push button to start playing again when the end is reached. |
| `selectionToggle`  | false                                    | Show a latched push button to play only the current selection. Not yet implemented |
| `standard`         | true                                     | Show the start, pause, reset, and progress controls. |
| `startPlaying`     | false                                    | Whether to start the MIDI as soon as it is available. (Not available in the Editor. Only available when calling ABCJS.renderMidi ) |
| `tooltipLoop`      | "Click to toggle play once/repeat."      | The text of the tooltip. |
| `tooltipPlay`      | "Click to play/pause."                   | The text of the tooltip. |
| `tooltipProgress`  | "Click to change the playback position." | The text of the tooltip. |
| `tooltipReset`     | "Click to go to beginning."              | The text of the tooltip. |


## Editor Params
| Param               | Default                | Description |
| ---                 | ---                    | ---         |
| `canvas_id`         | null                   | HTML id to draw in. If not present, then the drawing happens just below the editor. |
| `generate_midi`     | null                   | if present, then midi is generated. |
| `generate_warnings` | null                   | If present, then parser warnings are displayed on the page. |
| `gui`               | null                   | if present, the paper can send changes back to the editor (presumably because the user changed something directly.) |
| `indicate_changed`  | null                   | the dirty flag is set if this is true. |
| `midi_download_id`  | null                   | if present, the HTML id to place the midi download link. Otherwise, if midi_id is present it isplaced there, otherwise it is placed in the same div as the paper. An encompassing div surrounds each control with the class in the format "download-midi midi-%d". |
| `midi_id`           | null                   | if present, the HTML id to place the midi control. Otherwise it is placed in the same div as the  paper. An encompassing div surrounds each control with the class in the format "inline-midi midi-%d". |
| `midi_options`      | [Link](#midi-params)   | options to send to the midi engine. |
| `onchange`          | null                   | if present, the callback function to call whenever there has been a change. |
| `paper_id`          | null                   | |
| `parser_options`    | [Link](#parser-params) | options to send to the parser engine. |
| `render_options`    | [Link](#render-params) | options to send to the render engine. |
| `warnings_id`       | null                   | if present, the HTML id to place the warnings. Otherwise they are placed in the same div as the  paper. |
