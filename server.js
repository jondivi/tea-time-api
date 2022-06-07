const express=require('express')
const app=express()
const cors=require('cors')
const PORT=8000

app.use(cors())


// This section will be used for populating our API with information
const tea={
    'oolong':{
        'type':'black',
        'origin':'Yo mommas House',
        'waterTemp':200,
        'steepTime':180,
        'caffinated':true,
        'flavor':'delicious',
    },
    'matcha':{
        'type':'green',
        'origin':'Yo mommas House',
        'waterTemp':200,
        'steepTime':180,
        'caffinated':false,
        'flavor':'delicious',
    },
    'unknown':{
        'xxx':'unknown',
        'xxx':'unknown',
        'xxx':'unknown',
    },
}

// This will find out when someone is trying to get to the index of the site URL
//  and respond by sending them the index.html file
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

// This will find out when someone is trying to access the API URL
//  and respond by sending them the API information
app.get('/api/:name',(request,response)=>{
    const teaName=request.params.name.toLocaleLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})


// This last section will actually set up the server and allow it to listen on a port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The tea API server is running on port ${PORT}! Better go catch it!`)
})
