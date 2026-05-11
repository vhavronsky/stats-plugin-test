import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Icon } from '@redocly/theme/markdoc/components/Icon/Icon';
import { Link } from '@redocly/theme/components/Link/Link';

export const frontmatter = {
  seo: {
    title: 'Local AI Worker — Developer Documentation',
    description: 'Documentation and API references for managing and monitoring a local AI worker.',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const ENDPOINTS = [
  { icon: 'activity', color: 'green', title: 'Health Check', desc: 'Monitor worker health status to ensure high availability and efficient task processing.', method: 'GET', ep: '/health' },
  { icon: 'users', color: 'blue', title: 'User Management', desc: 'List all registered users configured for local inference access.', method: 'GET', ep: '/users' },
  { icon: 'user', color: 'purple', title: 'User Details', desc: 'Retrieve detailed information for a specific user ID.', method: 'GET', ep: '/users/{id}' },
];

const CURL_CODE = `curl -X GET https://example.com/health`;
const JSON_CODE = `{
  "status": "healthy"
}`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Wrapper>
      <HeroWrap>
        <HeroBg />
        <HeroGrid />
        <HeroInner>
          <HeroLeft>
            <Pills>
              <Pill $variant="blue">Local AI Worker API</Pill>
              <Pill $variant="sky">
                <LiveDot />
                Status Monitoring
              </Pill>
            </Pills>
            <HeroTitle>
              Simple and<br />
              <GradientText>lightweight</GradientText><br />
              monitoring.
            </HeroTitle>
            <HeroSub>
              The Local AI Worker portal provides API references for managing and monitoring your local inference workers. Ensure high availability with easy health checks and simple user management.
            </HeroSub>
            <HeroBtns>
              <PrimaryBtn as={Link} to="/docs/getting-started">Get Started →</PrimaryBtn>
              <OutlineBtn as={Link} to="/apis/openapi.yaml">View API Reference</OutlineBtn>
            </HeroBtns>
          </HeroLeft>

          <HeroRight>
            <TerminalWrap>
              <MacHeader>
                <MacDot $color="#ff5f57" />
                <MacDot $color="#ffbd2e" />
                <MacDot $color="#28c840" />
                <HealthyBadge>
                  <LiveDot style={{ width: '4px', height: '4px' }} />
                  HEALTHY
                </HealthyBadge>
              </MacHeader>
              <TerminalBody>
                <TermLabel>Request</TermLabel>
                <TermCode>{CURL_CODE}</TermCode>
                <TermLabel style={{ marginTop: '16px' }}>Response</TermLabel>
                <TermCode>{JSON_CODE}</TermCode>
              </TerminalBody>
            </TerminalWrap>
          </HeroRight>
        </HeroInner>
      </HeroWrap>

      <Section>
        <Eyebrow>
          <EyebrowLine />
          <EyebrowLabel>Endpoints</EyebrowLabel>
        </Eyebrow>
        <SectionTitle>Everything you need.</SectionTitle>
        <SectionSub>
          Straightforward API for checking worker health and managing users locally.
        </SectionSub>

        <EpGrid>
          {ENDPOINTS.map(ep => (
            <EpCard key={ep.title}>
              <EpIconWrap $color={ep.color}>
                <Icon
                  name={ep.icon}
                  size="1.1rem"
                  color={
                    ep.color === 'green' ? '#34d399' :
                    ep.color === 'purple' ? '#c4b5fd' :
                    ep.color === 'amber' ? '#fde68a' : '#93c5fd'
                  }
                />
              </EpIconWrap>
              <EpTitle>{ep.title}</EpTitle>
              <EpDesc>{ep.desc}</EpDesc>
              <EpPill>
                <MGet>{ep.method}</MGet>
                {ep.ep}
              </EpPill>
            </EpCard>
          ))}
        </EpGrid>
      </Section>

      <CtaSection>
        <CtaCard>
          <CtaTitle>Ready to monitor your workers?</CtaTitle>
          <CtaSub>
            Integrate local AI worker health checks in minutes.
          </CtaSub>
          <CtaBtns>
            <PrimaryBtn as={Link} to="/docs/getting-started">Read the guide →</PrimaryBtn>
            <OutlineBtn as={Link} to="/apis/openapi.yaml">Explore API</OutlineBtn>
          </CtaBtns>
        </CtaCard>
      </CtaSection>
    </Wrapper>
  );
}

// ─── Animations ──────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

// ─── Shared ───────────────────────────────────────────────────────────────────

const darkSurface = css`
  background: var(--landing-surface);
  border: 1px solid var(--landing-border);
  border-radius: 12px;
`;

// ─── Styled Components ───────────────────────────────────────────────────────

const Wrapper = styled.div`
  background: var(--landing-bg);
  color: var(--landing-text);
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Inter', system-ui, sans-serif;
`;

// Hero
const HeroWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 55% at 10% 45%, color-mix(in srgb, var(--landing-accent) 12%, transparent) 0%, transparent 65%),
    radial-gradient(ellipse 45% 50% at 85% 20%, color-mix(in srgb, var(--landing-accent-secondary) 10%, transparent) 0%, transparent 60%),
    var(--landing-bg);
  pointer-events: none;
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--landing-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--landing-border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%);
  pointer-events: none;
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;
  max-width: 1180px;
  margin: 0 auto;
  padding: 6rem 2.5rem 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem 3rem;
  }
`;

const HeroLeft = styled.div``;
const HeroRight = styled.div`
  perspective: 1000px;
`;

const Pills = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Pill = styled.span<{ $variant: 'blue' | 'sky' }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 11px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;

  ${({ $variant }) =>
    $variant === 'blue' && css`
      background: color-mix(in srgb, var(--landing-accent) 14%, transparent);
      border: 1px solid color-mix(in srgb, var(--landing-accent) 26%, transparent);
      color: var(--landing-accent);
    `}
  ${({ $variant }) =>
    $variant === 'sky' && css`
      background: color-mix(in srgb, var(--landing-accent-secondary) 14%, transparent);
      border: 1px solid color-mix(in srgb, var(--landing-accent-secondary) 26%, transparent);
      color: var(--landing-accent-secondary);
    `}
`;

const LiveDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation: ${pulse} 2s infinite;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 4.8vw, 4.2rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: var(--landing-text);
  margin-bottom: 1.2rem;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, var(--landing-accent), var(--landing-accent-secondary));
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSub = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--landing-text-muted);
  max-width: 430px;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  transition: all 0.25s;
  box-shadow: 0 4px 20px color-mix(in srgb, var(--landing-accent) 30%, transparent);

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px color-mix(in srgb, var(--landing-accent) 45%, transparent);
  }
`;

const OutlineBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  border: 1px solid var(--landing-border);
  color: var(--landing-text);
  border-radius: 9px;
  font-size: 14px;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  transition: all 0.2s;

  &:hover {
    border-color: color-mix(in srgb, var(--landing-accent) 50%, transparent);
    color: var(--landing-accent);
  }
`;

// Tilted Terminal
const TerminalWrap = styled.div`
  ${darkSurface}
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3), 0 0 0 1px color-mix(in srgb, var(--landing-accent) 15%, transparent);
  transform: rotateY(-8deg) rotateX(4deg) scale(0.95);
  transform-style: preserve-3d;
  transition: transform 0.4s ease;

  &:hover {
    transform: rotateY(-2deg) rotateX(2deg) scale(1);
  }
`;

const MacHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: color-mix(in srgb, var(--landing-text) 3%, transparent);
  border-bottom: 1px solid var(--landing-border);
  gap: 8px;
`;

const MacDot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const HealthyBadge = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(40, 200, 64, 0.15);
  border: 1px solid rgba(40, 200, 64, 0.3);
  color: #28c840;
  border-radius: 12px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TerminalBody = styled.div`
  padding: 20px;
  background: color-mix(in srgb, var(--landing-text) 1%, transparent);
`;

const TermLabel = styled.div`
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--landing-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const TermCode = styled.pre`
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--landing-text);
  white-space: pre-wrap;
  margin: 0;
`;

// Endpoints section
const Section = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem 2.5rem 4rem;
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.9rem;
`;

const EyebrowLine = styled.div`
  width: 28px;
  height: 2px;
  background: linear-gradient(90deg, var(--landing-accent), var(--landing-accent-secondary));
  border-radius: 2px;
`;

const EyebrowLabel = styled.span`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--landing-accent);
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700;
  color: var(--landing-text);
  letter-spacing: -0.03em;
  margin-bottom: 0.65rem;
`;

const SectionSub = styled.p`
  font-size: 14.5px;
  color: var(--landing-text-muted);
  max-width: 480px;
  line-height: 1.65;
  margin-bottom: 2.25rem;
  font-weight: 300;
`;

// Endpoint cards
const EpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const EpCard = styled.div`
  ${darkSurface}
  padding: 1.5rem;
  transition: all 0.25s;

  &:hover {
    border-color: color-mix(in srgb, var(--landing-accent) 30%, transparent);
    transform: translateY(-3px);
  }
`;

const EpIconWrap = styled.div<{ $color: string }>`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  ${({ $color }) =>
    $color === 'green' && css`
      background: rgba(52, 211, 153, 0.1);
      border: 1px solid rgba(52, 211, 153, 0.2);
    `}
  ${({ $color }) =>
    $color === 'purple' && css`
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
    `}
  ${({ $color }) =>
    $color === 'blue' && css`
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.2);
    `}
`;

const EpTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--landing-text);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
`;

const EpDesc = styled.p`
  font-size: 13px;
  color: var(--landing-text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
  font-weight: 300;
`;

const EpPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--landing-text-muted);
  background: color-mix(in srgb, var(--landing-text) 3%, transparent);
  border: 1px solid var(--landing-border);
  border-radius: 6px;
  padding: 4px 10px;
`;

const MGet = styled.span`
  color: #34d399;
  font-weight: 600;
`;

// CTA
const CtaSection = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.5rem 2.5rem 5rem;
`;

const CtaCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  padding: 4.5rem 3.5rem;
  text-align: center;
  background: linear-gradient(135deg, color-mix(in srgb, var(--landing-accent) 15%, var(--landing-bg)), color-mix(in srgb, var(--landing-accent-secondary) 15%, var(--landing-bg)));
  border: 1px solid color-mix(in srgb, var(--landing-accent) 18%, transparent);

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 280px;
    background: radial-gradient(ellipse, color-mix(in srgb, var(--landing-accent) 15%, transparent) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CtaTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: var(--landing-text);
  letter-spacing: -0.03em;
  margin-bottom: 0.7rem;
  position: relative;
  z-index: 2;
`;

const CtaSub = styled.p`
  font-size: 14.5px;
  color: var(--landing-text-muted);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  font-weight: 300;
`;

const CtaBtns = styled.div`
  display: flex;
  gap: 11px;
  justify-content: center;
  position: relative;
  z-index: 2;
`;
