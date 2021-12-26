import React from "react";

export default function Option(props){
    return (<>
        {props.options.map((item, key) =>
            <div key={key}>


                {Object.values(item).map((value, index) =>
                    <option  value={Object.keys(item)}>{value}</option>
                )}
            </div>
        )}

      </>)
}
