import {render, screen} from '@testing-library/react';
import Menu from '../../pages/Menu';

describe("Menu", ()=>{

    beforeEach(()=>{
        window.fetch = jest.fn();
        render(<Menu/>)
    });

    it('should render', () =>{

        window.fetch.mockResolvedValueOnce({
            json: async () =>[],
        });

    });
})