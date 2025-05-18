export interface SocialNetwork {
    name: string;
    iconPath: string;
    url: string;
}

export const socialNetworks: SocialNetwork[] = [
    {
        name: 'LinkedIn',
        iconPath: 'assets/images/networks/linkedin.svg',
        url: 'https://www.linkedin.com/in/andresuribeg/'
    },
    {
        name: 'Email',
        iconPath: 'assets/images/networks/gmail.svg',
        url: 'mailto:andresfelipeuribe11@gmail.com'
    },
    {
        name: 'WhatsApp',
        iconPath: 'assets/images/networks/whatsapp.svg',
        url: 'https://wa.me/573016561380'
    }
]; 