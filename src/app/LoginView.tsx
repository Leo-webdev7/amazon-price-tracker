import { Button } from '@/components/ui/button';
import {Card} from '@/components/ui/card';


export default function LoginForm() {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
        <Card className='min-w-xs text-center'> 
            <div>
                <h1 className='text-2xl font-bold m-0'>Welcome Back</h1>
                <p>please login to continue</p>
            </div>
            <div>
                <Button>Login with Google</Button>
            </div>
        </Card>
    </div>
    );
};

