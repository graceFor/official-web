import React from 'react';
import Helmet from 'react-helmet';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Args {
  volunteer: any | undefined;
  loading: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      minHeight: 'calc(100vh - 128px)'
    },
    title: {
      margin: theme.spacing(2, 0, 4),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.6
    },
    info: {
      fontSize: theme.spacing(3),
      textAlign: 'center'
    },
    applicant: {
      padding: theme.spacing(2, 6)
    },
    question: {
      fontSize: '1.6em',
      marginBottom: theme.spacing(2)
    },
    answer: {
      marginBottom: theme.spacing(4)
    },
    imageButton: {
      marginRight: theme.spacing(2)
    },
    link: {
      textDecoration: 'none'
    }
  })
);

export default function VolunteerDetailPresenter(args: Args) {
  const { volunteer, loading } = args;

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Volunteer</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Typography color='primary' variant='h4' className={classes.title}>
            지원서 상세보기
          </Typography>
          {!loading && volunteer && (
            <>
              <Typography className={classes.info}>
                {`이름: ${volunteer.name}`}
              </Typography>
              <Typography className={classes.info}>
                {`학번: ${volunteer.sid}`}
              </Typography>
              <Typography className={classes.info}>
                {`학년: ${volunteer.grade}`}
              </Typography>
              <Typography className={classes.info}>
                {`단과대학: ${volunteer.college}`}
              </Typography>
              <Typography className={classes.info}>
                {`학과: ${volunteer.major}`}
              </Typography>
              <Grid container className={classes.applicant}>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.question}>
                    1. 지원동기를 작성해주세요.
                  </Typography>
                  <Textfield
                    fullWidth
                    id='motive'
                    multiline
                    name='motive'
                    required
                    rows='6'
                    variant='outlined'
                    className={classes.answer}
                    value={volunteer.application.motive}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.question}>
                    2. 다룰 줄 아는 프로그래밍 언어와, 사용할 수 있는 수준을
                    상(프로젝트 경험 있음) / 중(기능구현 경험 있음) /
                    하(기초지식 수준)로 표현해서 작성해주세요.
                  </Typography>
                  <Textfield
                    fullWidth
                    id='spec'
                    multiline
                    name='spec'
                    required
                    rows='4'
                    variant='outlined'
                    className={classes.answer}
                    value={volunteer.application.spec}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.question}>
                    3. 2020년 교내/외에서 활동하는 스터디, 모임 등이 있으신가요?
                    있다면 어느 활동을 하시나요?
                  </Typography>
                  <Textfield
                    fullWidth
                    id='activity'
                    multiline
                    name='activity'
                    required
                    rows='6'
                    variant='outlined'
                    className={classes.answer}
                    value={volunteer.application.activity}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.question}>
                    4. 코딩 관련해서 노력했던 것이나 프로젝트 등을 진행해본
                    경험이 있으신가요?
                    <br />
                    (사소한 것이라도 좋습니다! 진행하는 동안 느낀 점, 후기 등을
                    자세히 적어주시면 더욱 도움이 됩니다.)
                  </Typography>
                  <Textfield
                    fullWidth
                    id='experience'
                    multiline
                    name='experience'
                    required
                    rows='6'
                    variant='outlined'
                    className={classes.answer}
                    value={volunteer.application.experience}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.question}>
                    5. 만들고 싶은 웹서비스가 있으신가요? 만들고 싶은 서비스를
                    상세히 설명하고, 스케치를 작성해주세요!
                    <br />
                    (스케치는 글, 이미지 등으로 자유롭게 표현해주세요.)
                  </Typography>
                  <Textfield
                    fullWidth
                    id='motive'
                    multiline
                    name='motive'
                    required
                    rows='8'
                    variant='outlined'
                    className={classes.answer}
                    value={volunteer.application.wannaMakeDesc}
                  />
                  {volunteer.application.wannaMakeImageUrl && (
                    <a
                      href={volunteer.application.wannaMakeImageUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classes.link}
                    >
                      <Button
                        color='primary'
                        variant='outlined'
                        className={classes.imageButton}
                      >
                        업로드된 이미지
                      </Button>
                    </a>
                  )}
                  {!volunteer.application.wannaMakeImageUrl && (
                    <Button
                      disabled
                      variant='outlined'
                      className={classes.imageButton}
                    >
                      업로드된 이미지 없음
                    </Button>
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}
