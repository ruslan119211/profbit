import React from "react";
import Select from 'react-select'


/**
 *
 * @param props: {attr: {}, label: string, name: string, type: string, options: {}}
 * @constructor
 */
export default function Input(props) {


    return (<>

        {(() => {
            if (props.type == 'text' || props.type == 'email') {
                return (<>
                    <label htmlFor={props.type}>{props.label}</label>
                    <input id={props.type} type={props.type} placeholder={props.attrs.placeholder}/>
                </>)
            } else if (props.type == 'select') {

                const options = [];
                props.options.forEach(function (element) {
                    options.push({label: Object.values(element), value: Object.keys(element)})
                });

                return (<>
                    <label htmlFor={props.type}>{props.label}</label>
                    <Select options={options} placeholder={props.attrs.placeholder} />

                </>)
            } else if (props.type == 'textarea') {
                return (<>
                    <label htmlFor={props.type}>{props.label}</label>
                    <textarea id={props.type} placeholder={props.attrs.placeholder} rows="10"></textarea>
                </>)
            }
        })()}

    </>)
}
