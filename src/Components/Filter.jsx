const Filter = ({ value, onChange }) => {
    return (
        <div>
            find anime 
            <input
                value={value}       
                onChange={onChange}
            />
        </div>
    );
}

export default Filter;
