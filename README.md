# Personal Resume

## What is this?
A resume created using React inspired by a HTML based template, [https://github.com/mnjul/html-resume](https://github.com/mnjul/html-resume)

## Why do this?
### Lack of skill with designer tools
  - I am not a designer, therefore I'm not proficient enough to create a resume **easily** using Illustrator.
  - Creating the resume with something like Photoshop would result in a lower quality resume due to the lack of vectors.
  - As a frontend developer however, I am very good with React. Therefore, I can create a resume easily and in high quality.
### Lack of flexibility
  - Using something such as Word or Google Docs, I am able to create a resume, but with much difficulty as I layer tables upon tables.
  - For anything that has to do this, don't you just hate the mandatory spacing around tables? (Free flow items are basically impossible)
  - But with HTML however, I am able to freely control everything on my page easily and consistently.
### Lack of indepedence
  - I am lazy, I want my resume to be like my personal website, where I can edit the data without having to mess with anything else.
  - Using my old resume, if I were to change the content. 90% of the time I would also have to fix the styles.
  - Now with this, the resume and data are independent by storing them in objects. Therefore, I simply use React to render the data.

### Conclusion
 - By using a JavaScript framework, I am able to achieve flexiblity and easy data manipulation. (Where the React application
 can be anything, we're turning this into a pdf anyways)
 
## How does it work?
 - The resume has a centered fixed size of a letter size paper (11 x 8.5 inch), with a nice little light
 grey background for <html> and a box shadow for webview. (Because I can)
 - When creating the pdf, simply print screen with "header and footer" off, and "background-graphics" on.
 - Save the PDF and you're done! :D

## Improvements
 - Add a build script for creating a pdf with parcel
 - Clean up the styling
 - Make the resume on webview interactive (Just because I can)
