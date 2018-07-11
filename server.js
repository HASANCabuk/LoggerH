const app=require('./app');
app.get('/',function(req,res){
    res.send('Geldin mi!!')
})
app.get('/login',function(req,res){
    res.send('Logindesin!!')
})

app.listen('3000');