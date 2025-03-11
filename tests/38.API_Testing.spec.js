import{test, expect} from '@playwright/test'
let userid;
test("Get Request", async({request})=>
{
   const GetResponse=await request.get('https://reqres.in/api/users?page=2')
   console.log(await GetResponse.json())
   expect(GetResponse.status()).toBe(200)
})

test("Post Request", async({request})=>
{
   const PostResponse= await request.post('https://reqres.in/api/users', 
   {
        data: { "name":"Ranjith", "job":"trainer" },
        headers:{ "Action":"application/json" }
   }
)
    const res=await PostResponse.json()
    userid=await res.id
    console.log(await res) 
    expect(PostResponse.status()).toBe(201)
 
})

test("Put Request", async({request})=>
{
    const PutResponse=await request.put('https://reqres.in/api/users/' +userid, 
    {
        data:{"name":"john-britto", "job":"Full-stack Developer"}
    })
  
    console.log(await PutResponse.json())
    expect(PutResponse.status()).toBe(200)


})

test("Delete Request", async({request})=>
{
    const DeleteResponse=await request.delete('https://reqres.in/api/users/' +userid)  
    expect(DeleteResponse.status()).toBe(204)
})