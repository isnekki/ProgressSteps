const steps = document.querySelectorAll('.stepContainer')
const activeSteps = [...document.querySelectorAll('.selected')]
const nextButton = document.querySelector('.nextButton')
const prevButton = document.querySelector('.prevButton')
const progress = document.querySelector('.progress')
const progressBarContainer = document.querySelector('.progressBar')

const NUMBER_OF_STEPS = 4
const STEP_CONTAINER_WIDTH = 40

if (activeSteps.length === 1) prevButton.setAttribute('disabled', true)

const onNextPress = () => {
    if (activeSteps.length >= NUMBER_OF_STEPS) return
    const newActiveStep = steps[activeSteps.length]
    newActiveStep.classList.add('selected')
    activeSteps.push(newActiveStep)
    if (activeSteps.length > 1 && prevButton.getAttribute('disabled') !== null) prevButton.removeAttribute('disabled')
    if (activeSteps.length === NUMBER_OF_STEPS && nextButton.getAttribute('disabled') === null) nextButton.setAttribute('disabled', true)
    progress.style.width = `${((activeSteps.length - 1) / (NUMBER_OF_STEPS - 1)) * 100}%` 
}

const onPrevPress = () => {
    if (activeSteps.length === 1) return
    const stepToUnactivate = activeSteps.pop()
    if (activeSteps.length < NUMBER_OF_STEPS && nextButton.getAttribute('disabled') !== null) nextButton.removeAttribute('disabled')
    if (activeSteps.length === 1 && prevButton.getAttribute('disabled') === null) prevButton.setAttribute('disabled', true)
    stepToUnactivate.classList.remove('selected')
    progress.style.width = `${((activeSteps.length - 1) / (NUMBER_OF_STEPS - 1)) * 100}%` 
}

nextButton.addEventListener('click', onNextPress)
prevButton.addEventListener('click', onPrevPress)

