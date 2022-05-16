<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/930/629/datas/original.png"
     alt="Markdown Monster icon"
     style="float: left; margin-right: 10px;" />
## Inspiration
All over the world, many people suffer from skin conditions that hinder their mental and physical well-being. They begin prematurely taking dangerous medications to cure the symptoms, without addressing the main causes.  Skeen is here to fix it.

## What it does
Our app detects skin conditions on pictures uploaded by the user, then analyses the user's lifestyle and bad habits in order to find the potential causes for the conditions. Finally, it give suggestions on how to remedy the problem. 

## How we built it
We trained a tensor-flow convolutional neural network with data from Drmnet NZ, the world’s leading online resource on all things skin. This network classifies images of skin conditions. After that, using Terra’s API, we collect the user’s data from all the health applications and devices he gave access to in order to pinpoint the causes, which may or may not include: nutrition and dietary issues (caffeine, sugar and salt excess for examples), sleep problems, stress… 
The link between the issues and skin conditions has been medically proven. 

## Challenges we ran into

Artificial intelligence is not exploited in the skin health sector, which makes it ripe for innovation, and the datasets are not open-source. DermNet is the most complete and reliable dermatology dataset. We also used data augmentation and pre-processing techniques to make the model more accurate.

## Accomplishments that we're proud of
We are proud of the model we build, it can detect 23 skin conditions with a good accuracy. More over, 
we made some data analytics proving the feasibility of exploiting health data from apps and devices to make pinpoint the bad habits of our users, which could be the potential causes for the skin problem.

## What we learned
We improved our skillset in many technologies including React Native, Tensorflow and we learned some deep learning techniques using convolutional neural networks. We learnt how to use APIs to collect data and how to make data analytics.

## What's next for SKEEN
Generalize our solution to target more health-related concerns and pinpoint more concerns from their the user's lifestyle.
