import '../css/searchbar.css';

export default function SearchBar(){
    return(
        <div className="container">
            <div id="content">
        <form className='form-inline'>
          <div className="input-group">
            <input type='text' id='search' className="form-control search-form" placeholder="Scooby Doo"/>
            <span className="input-group-btn" style={{width:'39px'}}>
              <button id="search-this"type="button" className="pull-right btn btn-default search-btn">
                  <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        
        <p className="text-center">Some centered text</p>
        
        
    </div>
  </div>
    );
}