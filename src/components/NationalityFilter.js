export function NationalityFilter(props) {
    return (
        <div>
            <label>
                <input type="radio"
                    id="cuisine1"
                    name="nationality"
                    value="Chinese"
                    onChange={props.onChangeFilter}
                />
                Chinese
            </label>
            <label>
                <input type="radio"
                    name="nationality"
                    value="Indian"
                    onChange={props.onChangeFilter}
                />
                Indian
            </label>
            <label>
                <input type="radio"
                    name="nationality"
                    value="Italian"
                    onChange={props.onChangeFilter}
                />
                Italian
            </label>
            <label>
                <input type="radio"
                    name="nationality"
                    value="American"
                    onChange={props.onChangeFilter}
                />
                American
            </label>
            <label>
                <input type="radio"
                    name="nationality"
                    value="Mexican"
                    onChange={props.onChangeFilter}
                />
                Mexican
            </label>
            <label>
                <input type="radio"
                    name="nationality"
                    value="Clear"
                    onChange={props.onChangeFilter}
                />
                Clear
            </label>
        </div>
    )
}