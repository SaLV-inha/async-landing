const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UCoGDh1Xa3kUCpok24JN5DKA&part=snippet%2Cid&order=date&maxResults=50'
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c664d21e3msh20e1931914704b2p1deb72jsnbf30f0e3a8d4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchdata(urlapi){
    const response = await fetch(urlapi , options)
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchdata(API);
        let view =`
        ${videos.items.map(video =>`
        
        <div class="group relative">
        <div   
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>  
        <div class="mt-4 flex justify-between">
           <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>  
                ${video.snippet.title}
            </h3>  
            </div>  
        </div>`

        ). slice (0 , 5).join('')}`;
        content.innerHTML = view ;
    }catch (error){
        console.log(error)
    }
})();