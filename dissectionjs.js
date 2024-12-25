document.addEventListener('DOMContentLoaded', function() {
    let typingTimeout;  // Store the timeout ID to cancel typing if interrupted
    let currentTextContainer = null; // Store the current text container for typing
    let currentText = ''; // Store the text that will be typed

    // Function to handle showing text when an image is clicked
    function showText(image) {
        const textContainer = document.getElementById('text-container');
        
        // Set the text based on the clicked image
        let text = '';

        if (image === 'image1') {
            text = `Left Brain
The left hemisphere of the brain is primarily involved in functions such as language, logic, and analytical thinking. Key areas include:

Frontal Lobe:
Responsible for higher cognitive functions, such as decision-making, problem-solving, and planning.
Involved in speech production (Broca's area).

Parietal Lobe:
Processes sensory information from the body, such as touch, temperature, and spatial awareness.
Responsible for tasks like mathematical calculations and logical reasoning.

Temporal Lobe:
Important for processing auditory information.
Involved in memory and language comprehension (Wernicke's area).

Occipital Lobe:
Primarily responsible for visual processing and interpreting visual stimuli.

Broca’s Area:
Located in the frontal lobe, this area controls speech production and articulation.

Wernicke’s Area:
Found in the temporal lobe, it is crucial for language comprehension.

Left Skull
The left side of the skull houses various bones that protect the brain and support facial structures. Key parts of the left skull include:

Frontal Bone:
Forms the forehead and the upper part of the eye sockets.
Protects the frontal lobe of the brain.

Parietal Bone:
Located on the sides and top of the skull.
Protects the parietal lobe and supports the structure of the skull.

Temporal Bone:
Located on the lower sides of the skull, near the ears.
Protects the temporal lobes and houses structures related to hearing and balance.

Occipital Bone:
Forms the back and base of the skull.
Protects the occipital lobe and allows passage of the spinal cord through the foramen magnum.

Zygomatic Bone:
Also known as the cheekbone, it forms the prominence of the cheek.
Helps form the orbit of the eye.

Maxilla:
Forms the upper jaw and the central part of the face.
Supports the teeth and forms part of the nasal cavity and the eye socket.

Nasal Bone:
Forms the bridge of the nose.
Supports the structure of the nose.

Mandible (Lower Jawbone):
The only movable bone of the skull, forming the lower jaw.
Supports the lower teeth and is involved in chewing and speech.`;
        } else if (image === 'image2') {
            text = `Front-facing Skull and Frontal Brain Parts

The skull, a complex structure composed of numerous bones, serves as the protective casing for the brain. When viewed from the front, it offers insight into both the bones of the face and the brain’s frontal regions.

Frontal Bone:
The frontal bone forms the forehead and the upper part of the eye sockets, providing protection for the frontal lobe of the brain.
It is one of the most noticeable bones when viewed from the front.

Nasal Bone:
Situated at the center of the face, it forms the bridge of the nose.
It provides structural support for the nose and helps in protecting the olfactory area.

Maxilla:
Located beneath the nasal bone, the maxilla forms the upper jaw and supports the upper teeth.
It also contributes to the formation of the orbit of the eye and the nasal cavity.

Zygomatic Bones:
Known as the cheekbones, these two bones are located on either side of the face, forming the prominence of the cheeks.
They play a key role in the structure of the face and in protecting the eyes.

Mandible (Lower Jawbone):
The mandible is the only movable bone in the face and forms the lower jaw.
It supports the lower teeth and is involved in chewing and speech production.

Frontal Lobe of the Brain:
The frontal lobe, located in the front part of the brain, is responsible for a wide range of high-level functions such as decision-making, problem-solving, and planning.
It is involved in voluntary motor activity, as well as in regulating emotions and behavior.

Broca's Area:
Situated in the left frontal lobe, Broca's area is crucial for speech production.
It enables the motor control needed for speech and is essential for fluent verbal expression.

Central Sulcus:
The central sulcus is a prominent groove that separates the frontal lobe from the parietal lobe.
It plays an important role in dividing the motor and sensory areas of the brain.

Orbital Frontal Cortex:
This region of the frontal lobe is located just above the eyes and plays a critical role in decision-making, emotion regulation, and personality.
It helps in assessing risks and making judgments based on past experiences.

Temporal Lobes (Near the Front):
While primarily responsible for auditory processing, the temporal lobes are situated close to the frontal lobes and play a role in memory, speech, and language comprehension.

Occipital Bone:
The occipital bone, while primarily part of the posterior skull, also connects to the lower portion of the frontal bones, providing structural support and protection for the occipital lobe.

The Skull’s Anterior View:
The front-facing view of the skull showcases the delicate balance between the facial bones and the brain’s protective casing.
It illustrates the complexity of human facial structure and brain function.

Sphenoid Bone:
A central bone in the skull that helps to hold together the facial bones and provides support to the frontal lobes.
It is often considered the "keystone" of the cranial floor.`;
        } else if (image === 'image3') {
            text = `
Parts of the Right Brain

Right Hemisphere Overview:
The right hemisphere of the brain is primarily involved in functions related to creativity, spatial awareness, and holistic thinking. It is responsible for non-verbal tasks and processing of visual and auditory information.

Frontal Lobe:
Involved in creativity, emotional processing, and problem-solving.
Plays a role in managing and interpreting spatial awareness, abstract thinking, and decision-making.

Parietal Lobe:
Responsible for processing sensory information, especially related to spatial and visual perception.
It aids in the recognition of objects and people through visual input, contributing to spatial awareness.

Temporal Lobe:
Handles the processing of auditory stimuli, contributing to the recognition of sounds and music.
It plays a role in non-verbal memory and the ability to understand music and rhythm.

Occipital Lobe:
Primarily responsible for visual processing and the interpretation of visual stimuli.
Plays a role in interpreting and integrating visual information, such as colors, shapes, and motion.

Broca's Area (Right Hemisphere):
In some individuals, a portion of the Broca's area, which is typically in the left hemisphere, can be involved in speech production and understanding in the right hemisphere, especially in cases of left-brain damage.

Wernicke's Area (Right Hemisphere):
While primarily located in the left hemisphere, there are similar areas in the right hemisphere that contribute to understanding and processing tone, pitch, and emotional content of speech.

Parts of the Right Skull

Frontal Bone (Right Side):
The right side of the frontal bone forms part of the forehead and upper part of the right eye socket.
Protects the frontal lobe of the brain on the right side.

Parietal Bone (Right Side):
Located on the top and side of the skull, it protects the parietal lobe on the right side.
Works with the left parietal bone to provide structure and support to the skull.

Temporal Bone (Right Side):
Located on the side of the skull near the ear, it houses the ear canal and protects the temporal lobe of the brain.
Contains structures critical for hearing and balance.

Occipital Bone (Right Side):
The right side of the occipital bone forms part of the back and base of the skull.
Protects the occipital lobe on the right side of the brain, which is responsible for visual processing.

Zygomatic Bone (Right Side):
The right zygomatic bone forms part of the cheekbone and supports the structure of the face.
Helps in forming the orbit of the eye on the right side.

Maxilla (Right Side):
The right maxilla forms part of the upper jaw, holding the teeth and supporting the structure of the face.
Forms part of the nasal cavity and the eye socket on the right side.`;
        }

        // Clear any previous typing, stop any ongoing timeout
        clearTimeout(typingTimeout);
        textContainer.innerHTML = ''; // Empty the container
        
        // Show the text container
        textContainer.style.display = 'block';

        // Start typing effect
        typeText(text, textContainer);
    }

    // Function to type the text one word at a time
    function typeText(text, container) {
        let words = text.split(' ');
        let wordIndex = 0;

        // Helper function for typing
        function typeWord() {
            if (wordIndex < words.length) {
                container.innerHTML += words[wordIndex] + ' '; // Add one word at a time
                wordIndex++;
                typingTimeout = setTimeout(typeWord, 100); // Adjust typing speed
            }
        }

        // Start the typing effect
        typeWord();
    }

    // Add event listeners to all images
    document.querySelectorAll('.image').forEach(image => {
        image.addEventListener('click', function() {
            showText(this.getAttribute('data-image'));
        });
    });
});
