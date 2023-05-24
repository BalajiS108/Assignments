function anagramString(str1,str2)
{
   l=str1.length;
   l1=str2.length;
   if(l=l1)
   {
    for(let i=0;i<l;i++)
    {
        for(let j=0;j<l;j++)
        {
            if(str1[0]==str2[j])
            {
                str1=str1.slice(1,l);
            }
            // console.log(str1);
        }
        // console.log(str1);
        // console.log(str2);
    }
    if(str1=="")
    {
        console.log("Given Strings are anagram")
    }
    else
    {
        console.log("Given strings are not anagram")
    }
   }
   else
   {
    console.log("Given strings are not anagram")
   }


}
anagramString("hea","beh")

