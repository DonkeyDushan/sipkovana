import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, IconButton, TextField } from '@mui/material';
import styles from './index.module.scss';
import { CopyIcon } from '../CopyIcon';
import { RiddleType } from 'app/utils/types';

export interface DialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  riddle: RiddleType;
  correct: undefined | false | true;
  setCorrect: (correct: undefined | false | true) => void;
}

export const DialogContent = ({ open, setOpen, correct, setCorrect, riddle }: DialogProps) => {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!correct) setAnswer('');
    setShowHint(false);
  }, [open, correct]);

  const handleCheck = () => {
    setCorrect(answer === riddle.answer);
    if (answer === riddle.answer) {
      setShowHint(false);
    }
    if (answer !== riddle.answer) {
      setAnswer('');
    }
  };

  const copyContent = async () => {
    await navigator.clipboard.writeText(riddle.location);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className={styles.dialog}>
      {correct && riddle.question}
      <TextField
        className={styles.textField}
        value={answer}
        onChange={(e) => setAnswer(e.target.value.toUpperCase())}
        disabled={correct}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleCheck();
        }}
      />
      {showHint && <Box className={styles.instructions}>{riddle.hint}</Box>}
      {!correct && (
        <Box className={styles.buttonsWrapper}>
          {!showHint && <Button onClick={() => setShowHint(true)}>Chci nápovědu</Button>}
          <Button onClick={handleCheck} sx={{ gridColumn: 2 }}>
            {' '}
            Potvrdit odpověď{' '}
          </Button>
        </Box>
      )}
      {correct && (
        <Box className={styles.instructions}>
          {riddle.location}
          {riddle.location.includes('N,') && (
            <IconButton
              aria-label="copy"
              size="small"
              onClick={() => {
                copyContent();
              }}
            >
              <CopyIcon />
            </IconButton>
          )}
        </Box>
      )}
      {correct === false && <Box>{'To není odpověď, kterou chceme slyšet. Zkus to znovu :)'}</Box>}
    </Dialog>
  );
};
