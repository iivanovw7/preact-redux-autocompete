import { h, Component } from 'preact';

export default class CountrySuggestions extends Component {
	shouldComponentUpdate({ country, onSelect, focused }) {
		return country !== this.props.country || 
                focused !== this.props.focused || 
                onSelect !== this.props.onSelect;
	}

	render({ country, focused }) {
        let key = Object.keys(country)[0];
		return (
			<div class={{"autocomplete-suggestion animated fadeInUp": true, "focused": focused}} 
                 onClick={this.props.onSelect.bind(this, country)}>
				<div class="left animated zoomIn">
                    <img src={"../assets/countries/" + key.toLowerCase() + ".png" } />
                </div>
                <div class="right">
                    {country[key]} 
                    <small>
                        <strong> ({key.toUpperCase()}) </strong>
                    </small>
                </div>
			</div>
		);
	}
}
