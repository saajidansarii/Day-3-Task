const url = "https://631ec76222cefb1edc3a4247.mockapi.io/suman"

const Fetch_all_fromurl = new XMLHttpRequest();
Fetch_all_fromurl.onreadystatechange = () => {
  if(Fetch_all_fromurl.readyState === XMLHttpRequest.DONE){
    let data = JSON.parse(Fetch_all_fromurl.response);
    console.log(data);
  }
};
Fetch_all_fromurl.open("GET", url);
Fetch_all_fromurl.setRequestHeader("Accept", "application/json");
Fetch_all_fromurl.send()


const find_by_id = new XMLHttpRequest();
find_by_id.onreadystatechange = () => {
  if (find_by_id.readyState = XMLHttpRequest.DONE){
    let data = JSON.parse(find_by_id.response);
    for (let i=0; i<data.length; i++){
      if (data[i].id === "10"){
        console.log(data[i].id);
        console.log(data[i].name);
        console.log(data[i].location);
        console.log(data[i].image_url);
      }
    }
  }
};

find_by_id.open("GET", url);
find_by_id.setRequestHeader("Accept", "application/json");
find_by_id.send(15);