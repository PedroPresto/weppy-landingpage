import React, { useState, useContext, createContext, ReactNode } from 'react';
import { AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

// 1. Define as opções que a nossa função de confirmação pode receber
interface ConfirmOptions {
    variant?: 'danger' | 'info' | 'success';
}

// 2. Define o tipo da função que o nosso hook vai expor ao resto da aplicação
type ConfirmFunction = (
    title: string,
    message: string,
    options?: ConfirmOptions
) => Promise<void>;

// 3. Cria o Contexto do React para o nosso hook
const ConfirmationDialogContext = createContext<ConfirmFunction>(() => Promise.reject());

// 4. Exporta o Hook personalizado que os componentes usarão para aceder à função 'confirm'
export const useConfirm = () => useContext(ConfirmationDialogContext);

interface ConfirmationProviderProps {
    children: ReactNode;
}

// 5. Este é o componente Provider "inteligente" que faz todo o trabalho de gestão de estado
export const ConfirmationProvider: React.FC<ConfirmationProviderProps> = ({ children }) => {
    const [dialogState, setDialogState] = useState<{
        title: string;
        message: string;
        options: ConfirmOptions;
    } | null>(null);

    const [resolver, setResolver] = useState<{ resolve: () => void; reject: () => void } | null>(null);

    // Esta é a função que as nossas páginas vão chamar de forma simples
    const confirm: ConfirmFunction = (title, message, options = { variant: 'info' }) => {
        setDialogState({ title, message, options });
        // Retorna uma Promessa que fica "pendurada", esperando a resposta do utilizador
        return new Promise((resolve, reject) => {
            setResolver({ resolve, reject });
        });
    };

    // Chamado quando o utilizador clica em "Confirmar"
    const handleConfirm = () => {
        resolver?.resolve(); // Resolve a Promessa (o 'await' na página continua a execução)
        setDialogState(null); // Fecha o diálogo
    };

    // Chamado quando o utilizador clica em "Cancelar" ou fecha o diálogo de outra forma
    const handleCancel = () => {
        resolver?.reject(); // Rejeita a Promessa (o código na página entra no bloco 'catch')
        setDialogState(null); // Fecha o diálogo
    };

    // Objeto para mapear as variantes aos seus estilos e ícones correspondentes
    const variantStyles = {
        danger: {
            icon: AlertTriangle,
            iconBg: "from-red-500/20 to-red-600/20",
            iconColor: "text-red-400",
            iconRing: "ring-red-500/30",
            confirmBg: "from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
        },
        info: {
            icon: Info,
            iconBg: "from-blue-500/20 to-blue-600/20",
            iconColor: "text-blue-400",
            iconRing: "ring-blue-500/30",
            confirmBg: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
        },
        success: {
            icon: CheckCircle,
            iconBg: "from-green-500/20 to-green-600/20",
            iconColor: "text-green-400",
            iconRing: "ring-green-500/30",
            confirmBg: "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
        },
    };

    // Determina qual estilo usar com base no estado atual do diálogo
    const currentVariant = variantStyles[dialogState?.options.variant || 'info'];
    const Icon = currentVariant.icon;

    if (!dialogState) {
        return (
            <ConfirmationDialogContext.Provider value={confirm}>
                {children}
            </ConfirmationDialogContext.Provider>
        );
    }

    return (
        <ConfirmationDialogContext.Provider value={confirm}>
            {children}

            {/* Modal Overlay */}
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
                {/* Modal Container */}
                <div className="relative bg-[#121212] border border-gray-800/60 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-scale-in">


                    {/* Close button */}
                    <button
                        onClick={handleCancel}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/60 rounded-lg transition-all duration-200 hover:scale-105 z-10"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {/* Content */}
                    <div className="relative p-6 sm:p-8">
                        {/* Icon and Header */}
                        <div className="flex items-start space-x-4 mb-6">
                            {/* Icon container with elegant styling */}
                            <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${currentVariant.iconBg} ring-1 ${currentVariant.iconRing} flex items-center justify-center backdrop-blur-sm`}>
                                <Icon className={`w-6 h-6 ${currentVariant.iconColor}`} />
                            </div>

                            {/* Text content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-white font-['Poppins'] tracking-tight mb-2">
                                    {dialogState.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {dialogState.message}
                                </p>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                            {/* Cancel button */}
                            <button
                                onClick={handleCancel}
                                className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-300 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700/60 hover:border-gray-600/80 rounded-xl transition-all duration-200 hover:scale-[1.02] backdrop-blur-sm"
                            >
                                Cancelar
                            </button>

                            {/* Confirm button */}
                            <button
                                onClick={handleConfirm}
                                className={`w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r ${currentVariant.confirmBg} rounded-xl ${currentVariant.confirmShadow} transition-all duration-200 hover:scale-[1.02]`}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ConfirmationDialogContext.Provider>
    );
};