import AppBus from "../AppBus";
import Actions from "../Actions";
import Events from "../Events";

const SearchResults = function(){

  let data = [];

  const publish = function(){
    AppBus.Publish(Events.Stores.SearchResultsUpdated, data);
  };

  const update = function(updatedData) {
    data = updatedData;
    publish();
  };

  AppBus.Subscribe(update).To(Events.Ajax.SearchResultsFound);
  AppBus.Subscribe(publish).To(Actions.LoadExistingSearchResults);

};

export default SearchResults();
