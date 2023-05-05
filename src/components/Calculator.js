import React, { useState } from 'react'

export default function Calculator() {


    const [display, setDisplay] = useState("");



    const handleChange = (event) => {
        setDisplay(event.target.value);
    }

    const buttonAction = (event) => {
        let str;
        const value = event.target.value;
        if (value === "AC") {
            str = "";
        }
        else if (value === "DEL") {
            str = display.substring(0, display.length - 1);
        }
        else if (value === "=") {
            try {
                str = eval(display);

            } catch (err) {
                str = "Mathematical Error";
            }
        }
        else {
            str = display + value;
        }
        setDisplay(str);
    }

    return (
        <>
            <div className="container">
                <h1 className='h1' id="mainheading">Calculator</h1>
                <div class="container" id="calculator">

                    <br />
                    <br />
                    <br />
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <td colspan="4">
                                    <textarea className="form-control" id="display" rows="5" value={display} onChange={handleChange} ></textarea>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><button onClick={buttonAction} class="btn btn-primary btn-lg" value="AC" >AC</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="DEL">DEL</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="(" >(</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value=")" >)</button></td>
                            </tr >
                            <tr>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="7" >7</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="8" >8</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="9" >9</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="-" >-</button></td >
                            </tr >
                            <tr>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="4" >4</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="5">5</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="6" >6</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="+" >+</button></td >
                            </tr >
                            <tr>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="1" >1</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="2">2</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="3">3</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="*">*</button></td >
                            </tr >
                            <tr>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="." >.</button></td>
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="0">0</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="=" >=</button></td >
                                <td><button onClick={buttonAction} type="button" class="btn btn-primary btn-lg" value="/" >/</button></td >
                            </tr >
                        </tbody >
                    </table >
                </div >

            </div>
        </>
    )
}