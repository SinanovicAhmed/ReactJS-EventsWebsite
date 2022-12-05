export const filterEvents = (events, searchParams) => {
  let filteredList = events;
  if (searchParams.location) {
    filteredList = filteredList.filter((event) => {
      return parseInt(event.location.id) === parseInt(searchParams.location);
    });
  }
  if (searchParams.category) {
    filteredList = filteredList.filter((event) => {
      return parseInt(event.category.id) === parseInt(searchParams.category);
    });
  }

  if (searchParams.search !== "") {
    filteredList = filteredList.filter((event) => {
      console.log(
        searchParams.search.slice(0, event.name.length),
        ", ",
        event.name.toString()
      );
      return (
        event.name.toLowerCase().slice(0, searchParams.search.length) ===
        searchParams.search.toLowerCase()
      );
    });
  }

  return filteredList;
};
