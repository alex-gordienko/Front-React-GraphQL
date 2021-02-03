interface IInputLanguageRestrict{
    restrict_type: 'symbols',
    available_symbols: RegExp; 
}

interface IInputStructureRestrict{
    restrict_type: 'like pattern',
    pattern: RegExp; 
}

interface IInputLenghtRestrict{
    restrict_type: 'lenght',
    lenght: number; 
}

interface IInputNotNullRestrict{
    restrict_type: 'not null'
}

export type IRestrict = IInputLanguageRestrict|IInputStructureRestrict|IInputLenghtRestrict|IInputNotNullRestrict;
