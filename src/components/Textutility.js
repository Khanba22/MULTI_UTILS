import React from 'react'
import { useState } from 'react'

export default function Textutility(props) {

    const [text_input, setText] = useState("");
    const updateText = (event) => {
        setText(event.target.value);
    }
    const [remove_input, removeText] = useState("");
    const remove_Text = (event) => {
        removeText(event.target.value);
    }
    const [replacing_input, replacingText] = useState("");
    const replacing_Text = (event) => {
        replacingText(event.target.value);
    }
    const [replaced_input, replacedText] = useState("");
    const replaced_Text = (event) => {
        replacedText(event.target.value);
    }

    const upperCase = () => {
        setText(text_input.toUpperCase());
    }
    const lowerCase = () => {
        setText(text_input.toLowerCase());
    }

    const removeExtraSpaces = () => {
        let string = "";
        text_input.split(" ").forEach(element => {
            if (element !== "") {
                string = string + " " + element;
            }
        });
        string = string.substring(1, string.length);
        setText(string);
    }

    const removeWords = () => {
        let string = "";
        text_input.split(" ").forEach(element => {
            if (element.toLowerCase() !== remove_input.toLowerCase()) {
                string = string + " " + element;
            }
        });
        string = string.substring(1, string.length);
        setText(string);
    }
    const removeExactWords = () => {
        let string = "";
        text_input.split(" ").forEach(element => {
            if (element !== remove_input) {
                string = string + " " + element;
            }
        });
        string = string.substring(1, string.length);
        setText(string);
    }

    const replaceWords = () => {
        let string = "";
        text_input.split(" ").forEach(element => {
            if (element !== replacing_input) {
                string = string + " " + element;
            }
            else {
                string = string + " " + replaced_input;
            }
        });
        string = string.substring(1, string.length);
        setText(string);
    }

    const correctSentences = () => {
        let string = "";
        let array = text_input.split(". ");
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            element = element.substring(0,1).toUpperCase() + element.substring(1, element.length);
            string = string + element + ". ";
        }
        setText(string);
    }



    return (
        <>
            <div className="mb-3" >
                <h1 className="fs-1">Text Utility</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4 className="h4">Enter Your Text Here</h4></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text_input} onChange={updateText} placeholder='Enter Your Text Here' ></textarea>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" onClick={upperCase} type="button">Convert to uppercase</button>
                    <button className="btn btn-primary" onClick={lowerCase} type="button">Convert To Lowercase</button>
                    <button className="btn btn-primary" onClick={removeExtraSpaces} type="button">Remove Extra Spaces</button>
                    <button className="btn btn-primary" onClick={correctSentences} type="button">Correct Paragraph Casing</button>

                    <div className="input-group mb-3">
                        <button className="btn btn-primary" type="button" id="button-addon1" onClick={removeWords}>Remove all </button>
                        <button className="btn btn-primary" type="button" id="button-addon1" onClick={removeExactWords}>Remove Words <span><small>(only words with same casing)</small></span></button>
                        <input onChange={remove_Text} value={remove_input} type="text" className="form-control" placeholder="Enter The Word to be removed" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                    <div className="input-group mb-2">
                        <button className="btn btn-primary" type="button" id="button-addon1" onClick={replaceWords}>Replace Words</button>
                        <input type="text" value={replacing_input} onChange={replacing_Text} className="form-control" placeholder="From" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <input type="text" value={replaced_input} onChange={replaced_Text} className="form-control" placeholder="To" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                    <div>
                        <h1 className="h1">Text Summary</h1>
                        <p class="lh-lg">No Of Characters = {text_input.split("").length}</p>
                        <p class="lh-lg">No Of Words = {text_input.split(" ").length - text_input.split(" . ").length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}