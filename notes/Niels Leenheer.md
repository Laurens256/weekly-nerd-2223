# Project Fugu
Niels Leenheer - april 2023

Project Fugu: Bridging the Gap Between Native and Web Applications

Among developers, web applications have gained significant popularity due to their ease of development. However, there's always been limitations to what is possible and what isn't. Examples of this include accessing the user's file system or hardware peripherals like printers or bluetooth devices. This limitation has been primarily due to security reasons.

Enter Project Fugu, an initiative aimed at closing the gap between native- and web applications. Project Fugu aims to provide web applications with access to a wide range of (hardware) functionalities, making web-applications more powerful and viable than ever before.

## File system api
An example where Project Fugu comes in handy is the File System Access API. Traditionally, web applications were unable to access a user's file system due to security restrictions. However, with the File System Access API, web applications can now securely access a user's file system, opening up possibilities for web-based text editors, image editors, and other applications that require file system access. This breakthrough has even made a web-based version of Photoshop possible, something that was impossible not even a few years ago.

## Hardware peripherals
Project Fugu also extends to interacting with hardware peripherals, such as printers, barcode scanners, and cash drawers. These functionalities were previously only available to native applications, but now web applications can also utilize them securely. Previously, a native application would need to be developed for each different platform, but with Project Fugu, web applications can be developed once and work across most platforms.

## Security
Despite the expanded capabilities, that Project Fugu offers, Niels believes that it is safe to use. Unlike native applications, which typically have unrestricted access to a user's device, web applications using Project Fugu functionalities are still subject to the security measures of the browser. By default, web applications do not have access to hardware functionalities, and explicit user consent is required to grant access. This makes it arguably safer to use Project Fugu in web applications compared to downloading a native app and granting it unrestricted access to the hardware.