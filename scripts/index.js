/*
The code below will change the heading with id = "mainHeading"
and insert a image with id = "imgArrow" in heading section:
*/

// Change heading for the header section
const mainHeading = document.getElementById('mainHeading').innerHTML = "We are creatives";

// Insert image under the heading
const headingImage = document.getElementById("imgArrow");
headingImage.src ="./images/icon-arrow-down.svg";



/*
The code below will change the section one headings with id's sectionOneHeadine
and sectionTwoHeading, it will also insert images for each section with Id's

*/

// Change headings for section one and two 
const sectionOneHeading = document.getElementById('sectionOneHeading').innerHTML = "Transform your brand";
const sectionTwoHeading = document.getElementById('sectionTwoHeading').innerHTML = "Stand out to the right audience";

// Change paragraphs for section one and two 
const sectionOneParagraph = document.getElementById('sectionOnePara').innerHTML = "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";
const sectionTwoParagraph = document.getElementById('sectionTwoPara').innerHTML = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.";

// Insert image for section one
const sectionOneImage = document.getElementById("sectionOneImage");
sectionOneImage.src ="./images/desktop/image-transform.jpg";
sectionOneImage.setAttribute("width", "100%");

// Insert image for section two
const sectionTwoImage = document.getElementById("sectionTwoImage");
sectionTwoImage.src ="./images/desktop/image-stand-out.jpg";
sectionTwoImage.setAttribute("width", "100%");

// Insert links for section one and two
const sectionOneLink = document.getElementById('sectionOneLink').innerHTML = "Learn More";
const sectionTwoLink = document.getElementById('sectionTwoLink').innerHTML = "Learn More";


// change heading for section three
const sectionThreeHeading1 = document.getElementById('sectionThreeHeading1').innerHTML = "Graphic design";
const sectionThreeHeading2 = document.getElementById('sectionThreeHeading2').innerHTML = "Photography";

// Insert text into section three paragraphs
const sectionThreePara1 = document.getElementById('sectionThreePara1').innerHTML = "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.";
const sectionThreePara2 = document.getElementById('sectionThreePara2').innerHTML = "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.";