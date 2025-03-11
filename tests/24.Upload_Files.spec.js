import {test, expect} from '@playwright/test'

//single file upload 
test("Upload Single File", async ({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    const selectfile=page.locator('#filesToUpload')
    await selectfile.setInputFiles('tests\\Upload Files\\file1.txt') //if you get this error [Error: ENOENT: no such file or directory,] just add 1 more slash in tha path || originail rel path ->'tests\Upload Files\file1.txt' change this to 'tests\\Upload Files\\file1.txt'
    await selectfile.setInputFiles([])  // for removing the files
    await page.waitForTimeout(2000)

}
)
 //Multiple file upload
test("Upload Multiple File", async ({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2000)
    const selectfile=page.locator('#filesToUpload')
    await selectfile.setInputFiles(['tests\\Upload Files\\file1.txt','tests\\Upload Files\\file2.txt']) 
    //if you get this error [Error: ENOENT: no such file or directory,] just add 1 more slash in tha path || originail rel path ->'tests\Upload Files\file1.txt' change this to //if you get this error [Error: ENOENT: no such file or directory,] just add 1 more slash in tha path 'tests\\Upload Files\\file1.txt'

    
    expect(page.locator('#fileList li:nth-child(1)')).toHaveText('file1.txt')
    expect(page.locator('#fileList li:nth-child(2)')).toHaveText('file2.txt')
    await page.waitForTimeout(2000)
}
)

