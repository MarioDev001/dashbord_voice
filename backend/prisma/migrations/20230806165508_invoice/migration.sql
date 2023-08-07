-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "idCliente" DECIMAL(65,30) NOT NULL,
    "referenceMonth" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "energyElectricKwh" DECIMAL(65,30) NOT NULL,
    "energyElectricPrice" DECIMAL(65,30) NOT NULL,
    "energyElectricValue" DECIMAL(65,30) NOT NULL,
    "energyInjectedKwh" DECIMAL(65,30) NOT NULL,
    "energyInjectedPrice" DECIMAL(65,30) NOT NULL,
    "energyInjectedValue" DECIMAL(65,30) NOT NULL,
    "energyIcmsKwh" DECIMAL(65,30) NOT NULL,
    "energyIcmsPrice" DECIMAL(65,30) NOT NULL,
    "energyIcmsValue" DECIMAL(65,30) NOT NULL,
    "contribution" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);
