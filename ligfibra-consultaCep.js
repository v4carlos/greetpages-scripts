// Lista de CEPs com cobertura
const coveredCeps = [
  "13091-203",
  "13092-512",
  "13091-214",
  "13091-202",
  "13092-521",
  "13092-510",
  "13092-524",
  "13101-499",
  "13092-566",
  "13092-511",
  "13092-529",
  "13094-510",
  "13091-329",
  "13020-440",
  "13091-320",
  "13091-339",
  "13091-207",
  "13092-000",
  "13092-525",
  "13101-465",
  "13092-551",
  "13092-542",
  "13091-208",
  "13092-553",
  "13091-100",
  "13091-291",
  "13091-505",
  "13094-220",
  "13091-338",
  "13091-502",
  "13091-286",
  "13091-107",
  "13000-000",
  "13000-100",
  "13091-504",
  "13091-509",
  "13092-569",
  "13101-473",
  "13091-190",
  "13091-211",
  "13101-463",
  "13091-525",
  "13091-206",
  "13091-464",
  "13091-309",
  "13091-530",
  "13091-204",
  "13100-390",
  "13091-519",
  "13091-518",
  "13091-191",
  "13100-235",
  "13100-167",
  "13100-291",
  "13100-240",
  "13100-153",
  "13100-266",
  "13100-165",
  "13092-558",
  "13091-160",
  "13100-174",
  "13100-306",
  "13100-160",
  "13100-236",
  "13091-470",
  "13100-238",
  "13091-201",
  "13100-358",
  "13091-570",
  "13090-390",
  "13091-503",
  "13091-205",
  "13100-169",
  "13100-156",
  "13101-340",
  "13100-163",
  "13091-210",
  "13091-564",
  "13100-172",
  "13091-212",
  "13092-500",
  "13100-385",
  "13101-430",
  "13100-335",
  "13100-170",
  "13091-575",
  "13091-581",
  "13091-285",
  "13091-579",
  "13091-551",
  "13088-709",
  "13100-176",
  "13091-209",
  "13100-221",
  "13091-318",
  "13100-263",
  "13101-400",
  "13091-520",
  "13091-132",
  "13091-030",
  "13091-511",
  "13090-718",
  "13091-440",
  "13091-307",
  "13091-506",
  "13101-310",
  "13100-325",
  "13091-471",
  "13100-178",
  "13091-313",
  "13091-340",
  "13091-000",
  "13091-206",
  "13096-240",
  "13100-172",
  "13096-760",
  "13088-364",
  "13092-520",
  "13091-100",
  "13088-106",
  "13088-602",
  "13100-367",
  "13088-221",
  "13088-365",
  "13090-762",
  "13088-724",
  "13088-117",
  "13088-608",
  "13101-307",
  "13100-355",
  "13091-014",
  "13101-304",
  "13101-420",
  "13088-705",
  "13088-733",
  "13088-712",
  "13100-177",
  "13088-095",
  "13088-028",
  "13088-032",
  "13091-558",
  "13091-560",
  "13088-011",
  "13091-134",
  "13088-524",
  "13091-583",
  "13088-130",
  "13091-313",
  "13101-458",
  "13101-899",
  "13101-324",
  "13100-371",
  "13091-510",
  "13091-080",
  "13105-070",
  "13088-652",
  "13092-527",
  "13091-521",
  "13092-616",
  "13088-007",
  "13088-753",
  "13100-321",
  "13091-512",
  "13088-479",
  "13101-480",
  "13101-440",
  "13092-582",
  "13100-166",
  "13100-399",
  "13088-382",
  "13088-483",
  "13105-062",
  "13096-325",
  "13091-517",
  "13101-405",
  "13091-410",
  "13091-598",
  "13060-847",
  "13100-202",
  "13100-259",
  "13091-105",
  "13101-431",
  "13088-565",
  "13100-173",
  "13096-560",
  "13077-073",
  "13100-359",
  "13091-580",
  "13046-429",
  "13092-899",
  "13100-364",
  "13088-604",
  "13100-325",
  "13100-237",
  "13091-070",
  "13091-090",
  "13100-331",
  "13092-527",
  "13100-165",
  "13105-050",
  "13105-045",
  "13105-124",
  "13088-130",
  "13105-064",
  "13105-086",
  "13105-015",
  "13077-109",
  "13105-899",
  "13105-750",
  "13105-072",
  "13101-114",
  "13092-603",
  "13105-084",
  "13101-403",
  "13105-002",
  "13091-554",
  "13101-490",
  "13101-432",
  "13088-699",
  "13091-598",
  "13088-742",
  "13091-598",
  "13100-202",
  "13096-661",
  "13088-565",
  "13077-073",
  "13100-359",
  "13091-580",
  "13046-429",
  "13092-899",
  "13100-364",
  "13088-604",
]

// Elementos DOM
const coverageForm = document.getElementById("coverage-form")
const cepInput = document.getElementById("cep")
const cepFeedback = document.getElementById("cep-feedback")
const checkBtn = document.getElementById("check-btn")
const btnText = checkBtn.querySelector(".btn-text")
const btnLoading = checkBtn.querySelector(".btn-loading")
const coverageResultDiv = document.getElementById("coverage-result")
const successIcon = document.getElementById("success-icon")
const errorIcon = document.getElementById("error-icon")
const resultTitle = document.getElementById("result-title")
const resultMessage = document.getElementById("result-message")
const resultActions = document.getElementById("result-actions")
const currentYearSpan = document.getElementById("current-year")

// Estado da aplicação
let isChecking = false

// Função para formatar CEP
function formatCep(value) {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "")

  // Aplica a máscara 00000-000
  if (numbers.length <= 5) {
    return numbers
  } else {
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`
  }
}

// Função para validar CEP
function validateCep(cep) {
  const cepPattern = /^[0-9]{5}-[0-9]{3}$/
  return cepPattern.test(cep)
}

// Função para mostrar feedback de validação
function showFeedback(message, type) {
  cepFeedback.textContent = message
  cepFeedback.className = `form-feedback ${type} show`
  cepFeedback.style.display = "block"
}

// Função para esconder feedback
function hideFeedback() {
  cepFeedback.classList.remove("show")
  setTimeout(() => {
    cepFeedback.style.display = "none"
  }, 300)
}

// Função para verificar cobertura
async function checkCoverage(event) {
  event.preventDefault()

  // Validação HTML5
  if (!coverageForm.checkValidity()) {
    coverageForm.reportValidity()
    return
  }

  const cep = cepInput.value

  // Validação customizada
  if (!validateCep(cep)) {
    showFeedback("Por favor, digite um CEP válido no formato 00000-000", "error")
    cepInput.focus()
    return
  }

  isChecking = true
  updateUI()
  hideFeedback()

  try {
    // Simula uma consulta (delay para melhor UX)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const hasService = coveredCeps.includes(cep)

    const coverageResult = {
      hasService,
      message: hasService
        ? "Ótima notícia! Atendemos sua região com fibra óptica de alta qualidade."
        : "Ainda não atendemos sua região, mas nossa cobertura está em constante expansão. Deixe seu contato para ser avisado quando chegarmos aí!",
    }

    showCoverageResult(coverageResult)

    if (hasService) {
      showFeedback("CEP encontrado em nossa área de cobertura!", "success")
    }
  } catch (error) {
    showFeedback("Erro ao verificar cobertura. Tente novamente.", "error")
  } finally {
    isChecking = false
    updateUI()
  }
}

// Função para atualizar interface
function updateUI() {
  checkBtn.disabled = isChecking

  if (isChecking) {
    btnText.style.display = "none"
    btnLoading.style.display = "flex"
  } else {
    btnText.style.display = "block"
    btnLoading.style.display = "none"
  }
}

// Função para mostrar resultado da cobertura
function showCoverageResult(coverageResult) {
  const { hasService, message } = coverageResult

  // Atualizar classes do resultado
  coverageResultDiv.className = `coverage-result ${hasService ? "success" : "error"}`

  // Mostrar/esconder ícones
  if (hasService) {
    successIcon.style.display = "block"
    errorIcon.style.display = "none"
  } else {
    successIcon.style.display = "none"
    errorIcon.style.display = "block"
  }

  // Atualizar título e mensagem
  resultTitle.textContent = hasService ? "Atendemos sua localidade!" : "Região não atendida"
  resultTitle.className = `result-title ${hasService ? "success" : "error"}`

  resultMessage.textContent = message
  resultMessage.className = `result-message ${hasService ? "success" : "error"}`

  // Criar botões de ação
  resultActions.innerHTML = ""

  if (hasService) {
    // Botão contratar
    const contractBtn = document.createElement("button")
    contractBtn.type = "button"
    contractBtn.className = "btn-action primary"
    contractBtn.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
            </svg>
            CONTRATAR AGORA
        `
    resultActions.appendChild(contractBtn)

    // Botão consultor
    const consultorBtn = document.createElement("button")
    consultorBtn.type = "button"
    consultorBtn.className = "btn-action outline"
    consultorBtn.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            Falar com Consultor
        `
    resultActions.appendChild(consultorBtn)
  } else {
    // Botão ser avisado
    const notifyBtn = document.createElement("button")
    notifyBtn.type = "button"
    notifyBtn.className = "btn-action outline error"
    notifyBtn.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4Z" />
            </svg>
            Quero ser Avisado
        `
    resultActions.appendChild(notifyBtn)

    // Botão vendas
    const salesBtn = document.createElement("button")
    salesBtn.type = "button"
    salesBtn.className = "btn-action outline"
    salesBtn.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            Falar com Vendas
        `
    resultActions.appendChild(salesBtn)
  }

  // Mostrar resultado com animação
  coverageResultDiv.style.display = "block"
  setTimeout(() => {
    coverageResultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, 100)
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Atualizar ano atual no footer
  currentYearSpan.textContent = new Date().getFullYear()

  // Event listener para o formulário
  coverageForm.addEventListener("submit", checkCoverage)

  // Event listener para input do CEP com formatação
  cepInput.addEventListener("input", (e) => {
    const formatted = formatCep(e.target.value)
    e.target.value = formatted

    // Limpar resultado anterior se o usuário começar a digitar novamente
    coverageResultDiv.style.display = "none"
    hideFeedback()

    // Validação em tempo real
    if (formatted.length === 9) {
      if (validateCep(formatted)) {
        e.target.setCustomValidity("")
        hideFeedback()
      } else {
        e.target.setCustomValidity("CEP inválido")
        showFeedback("Formato de CEP inválido", "error")
      }
    } else if (formatted.length > 0) {
      e.target.setCustomValidity("CEP incompleto")
    } else {
      e.target.setCustomValidity("")
      hideFeedback()
    }
  })

  // Event listener para validação em tempo real
  cepInput.addEventListener("blur", () => {
    if (cepInput.value && !validateCep(cepInput.value)) {
      showFeedback("Por favor, digite um CEP válido no formato 00000-000", "error")
    }
  })

  // Event listener para limpar validação ao focar
  cepInput.addEventListener("focus", () => {
    if (cepInput.validity.customError) {
      hideFeedback()
    }
  })

  // Smooth scrolling para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Adicionar efeitos hover aos botões
  const planButtons = document.querySelectorAll(".btn-plan")
  const primaryButtons = document.querySelectorAll(".btn-primary")

  planButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.backgroundPosition = "right center"
    })

    button.addEventListener("mouseleave", function () {
      this.style.backgroundPosition = "left center"
    })
  })

  primaryButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.backgroundPosition = "right center"
    })

    button.addEventListener("mouseleave", function () {
      this.style.backgroundPosition = "left center"
    })
  })
})

