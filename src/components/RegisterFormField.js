import { getData } from "country-list"
import "../assets/styles/components/RegisterFormField.css"
import { useState } from "react"

const Field = ({type, name, label, setState, element=null, portfolio=null}) => {
    const customTypes = ["combo", "radio"]
    const [selectedOption, setSelectedOption] = useState("")

    // I couldnt validate which radio button was currently checked without passing in a seperate prop just for radio and I already did that for portfolio
    const handleRadioSelection = (e) => {
        setSelectedOption(e.target.value)
        setState(e.target.value)
    }

    const renderComboField = () => {
        const year = new Date().getFullYear()
        const countries = getData();

        if (type === "combo") {
            return (
                <select className="Field-Field" id={name} onChange={(e) => setState(e.target.value)}>
                    {element === "date" && (
                        Array.from({length: 100}, (_, i) => {
                            return <option value={year - i}>{year - i}</option>
                        })
                    )}
                    {element === "portfolio" && (
                        <option value={portfolio}>{portfolio}</option>
                    )}
                    {element === "country" && (
                        <>
                            <option value="United States of America" defaultValue>United States of America</option>
                            {countries.map(country => (
                                <option value={country.name}>{country.name}</option>
                            ))}
                        </>
                    )}
                </select>
            )
        }
        // } else {
        //     return (
        //         <div className="radio" onChange={handleRadioSelection}>
        //                 <input 
        //                     type={type} 
        //                     value="yes"
        //                     name="yes"
        //                     checked={selectedOption === "yes"}
        //                 />
        //                 <label id="radio-label" className="Field-Label">Yes</label>
        //                 <input 
        //                     type={type} 
        //                     value="no"
        //                     name="no"
        //                     checked={selectedOption === "no"}
        //                 />
        //                 <label id="radio-label" className="Field-Label">No</label>
        //         </div>
        //     )
        // }
    }

    const renderRadioField = () => {
        return (
            <div className="radio" onChange={handleRadioSelection}>
                <input 
                    type={type} 
                    value="yes"
                    name="yes"
                    checked={selectedOption === "yes"}
                />
                <label id="radio-label" className="Field-Label">Yes</label>
                <input 
                    type={type} 
                    value="no"
                    name="no"
                    checked={selectedOption === "no"}
                />
                <label id="radio-label" className="Field-Label">No</label>
            </div>
        )
    }

    return (
        <div className="grid-x">
            <label className="Field-Label" htmlFor={name}>{label}</label>
            {!customTypes.includes(type) ? (
                <input 
                    className="Field-Field" 
                    type={type}  
                    id={name} 
                    placeholder={label}
                    onChange={(e) => setState(e.target.value)}/>
            ) : (
                // customField()
                type === "combo" ? renderComboField() : renderRadioField()
            )}
        </div>
    )
}

export default Field
