const appId=process.env.DISCORD_APPLICATION_ID;
const token=process.env.DISCORD_BOT_TOKEN;
if(!appId||!token) throw new Error("Missing DISCORD_APPLICATION_ID or DISCORD_BOT_TOKEN");
const commands=[{
 name:"cs-reply",
 description:"Reply to a Corrupt State RP support ticket",
 options:[
  {type:3,name:"ticket_id",description:"Ticket ID, e.g. CS-1234ABCD",required:true},
  {type:3,name:"message",description:"Message to send to the player",required:true}
 ]
}];
const response=await fetch(`https://discord.com/api/v10/applications/${appId}/commands`,{
 method:"PUT",headers:{"Authorization":`Bot ${token}`,"Content-Type":"application/json"},body:JSON.stringify(commands)
});
const data=await response.json();
if(!response.ok) throw new Error(JSON.stringify(data));
console.log("Registered slash command:",data.map(x=>"/"+x.name).join(", "));
